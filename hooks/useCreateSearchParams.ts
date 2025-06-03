"use client";

import { formatSearchParams } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useCreateSearchParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Lấy giá trị searchParams
  const getSearchParamsValue = (term: string) => searchParams.get(term);

  // Kiểm tra giá trị giống nhau không
  const isMatchingSearchParams = (term: string, value: string) =>
    formatSearchParams(value) === getSearchParamsValue(term);

  // Tạo dường dẫn searchParams
  const createSearchParamsURL = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(term, formatSearchParams(value));
    return `${pathname}?${params.toString()}`;
  };

  // Xóa đường dẫn và chuyển trang lập tức
  const deleteSearchParamsURL = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(term);
    return router.push(`${pathname}?${params.toString()}`);
  };

  // Chuyển trang
  const changeSearchParams = (term: string, value: string) =>
    router.push(createSearchParamsURL(term, value));

  return {
    getSearchParamsValue,
    isMatchingSearchParams,
    createSearchParamsURL,
    deleteSearchParamsURL,
    changeSearchParams,
  };
}
