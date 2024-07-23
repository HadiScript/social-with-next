"use client";

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

interface thisPageProps {
  slug: string;
}

export default function ({ slug }: thisPageProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Creata a post</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg"> Create a post</h3>
            <Input
              label="Title"
              labelPlacement="outside"
              name="title"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              label="Content"
              labelPlacement="outside"
              name="content"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(", ")}</div>
            ) : null}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
