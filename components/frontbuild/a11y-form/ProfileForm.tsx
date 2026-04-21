"use client";
import {
  createProfileSchema,
  ProfileFormValues,
} from "@/app/(frontbuild)/[locale]/a11y-form/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const t = useTranslations("profileForm");
  const schema = createProfileSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    console.log("Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="profile-form-heading"
    ></form>
  );
};

export default ProfileForm;
