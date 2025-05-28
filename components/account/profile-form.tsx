"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/utils";
import { EditIcon } from "lucide-react";
import { useState } from "react";

export default function ProfileForm() {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <form className="space-y-4">
      <section className="flex items-center-safe gap-4">
        <Avatar className="size-14 outline-2 outline-foreground">
          <AvatarImage src={image} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <div className="font-bold text-xl">Username</div>
          <label className="text-sm text-muted underline underline-offset-2 cursor-pointer hover:text-foreground duration-300">
            <input type="file" hidden accept="image/*" onChange={handleImage} />
            <span>Edit display image</span>
          </label>
        </div>

        {!isEdit && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEdit(true)}
                  className="ml-auto"
                >
                  <EditIcon />
                </Button>
              </TooltipTrigger>

              <TooltipContent>Edit account</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </section>

      <Separator />

      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">First Name</span>
              {isEdit ? (
                <Input placeholder="First Name" />
              ) : (
                <div>First Name</div>
              )}
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">Email</span>
              {isEdit ? (
                <Input placeholder="test123@test.com" />
              ) : (
                <div>test123@test.com</div>
              )}
            </label>

            <div className="flex items-center-safe gap-4">
              <label className="flex flex-col gap-1 flex-1">
                <span className="font-bold text-sm">Date of birth</span>
                {isEdit ? (
                  <Input placeholder={formatDate(new Date())} />
                ) : (
                  <div>{formatDate(new Date())}</div>
                )}
              </label>

              <label className="flex flex-col gap-1 w-1/3">
                <span className="font-bold text-sm">Gender</span>
                {isEdit ? <Input placeholder="Male" /> : <div>Male</div>}
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">Bio</span>
              {isEdit ? (
                <textarea
                  rows={4}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  totam laboriosam quisquam nisi cumque autem labore minus
                  inventore obcaecati iure aspernatur ipsam illum, laborum
                  pariatur. Esse rerum sit quasi laboriosam."
                  className="resize-none px-3 py-2 border-2 border-muted/30 rounded shadow-xs"
                />
              ) : (
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  totam laboriosam quisquam nisi cumque autem labore minus
                  inventore obcaecati iure aspernatur ipsam illum, laborum
                  pariatur. Esse rerum sit quasi laboriosam.
                </div>
              )}
            </label>
          </div>

          <div className="space-y-4">
            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">Last Name</span>
              {isEdit ? (
                <Input placeholder="Last Name" />
              ) : (
                <div>Last Name</div>
              )}
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">Contact</span>
              {isEdit ? (
                <Input placeholder="0123456789" />
              ) : (
                <div>0123456789</div>
              )}
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-bold text-sm">Address</span>
              {isEdit ? (
                <Input
                  placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
                nobis!"
                />
              ) : (
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Odit, nobis!
                </div>
              )}
            </label>

            <div className="grid grid-cols-3 gap-4">
              <label className="flex flex-col gap-1">
                <span className="font-bold text-sm">Street</span>
                {isEdit ? (
                  <Input placeholder="Nguyen Sinh Sac" />
                ) : (
                  <div>Nguyen Sinh Sac</div>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-bold text-sm">City</span>
                {isEdit ? <Input placeholder="Sa dec" /> : <div>Sa dec</div>}
              </label>

              <label className="flex flex-col gap-1">
                <span className="font-bold text-sm">Province</span>
                {isEdit ? (
                  <Input placeholder="Dong Thap" />
                ) : (
                  <div>Dong Thap</div>
                )}
              </label>
            </div>
          </div>
        </div>

        {isEdit && (
          <div className="ml-auto flex items-center-safe gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsEdit(false)}>
              Save changes
            </Button>
          </div>
        )}
      </section>
    </form>
  );
}
