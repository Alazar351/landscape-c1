"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loading } from "../../public";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().max(50, {
    message: "Maximum of 50 characters",
  }),
  emailAddress: z.string().email(),
  subject: z.string().max(50, {
    message: "Maximum of 50 characters",
  }),
  message: z
    .string()
    .min(5, {
      message: "Minimum of 5 characters",
    })
    .max(200, {
      message: "Maximum of 200 characters",
    }),
});

type EmailSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async (data: EmailSchema) => {
    setLoading(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseBody = await response.json();

      if (responseBody && responseBody.message === "Email sent successfully") {
        toast({ title: "Email Sent" });
        return true;
      } else {
        toast({ variant: "destructive", title: "Email not sent" });
        return false;
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Error sending email" });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendEmail)}
          className="flex w-full flex-col gap-5 rounded-lg bg-white p-5 md:py-14 md:pl-16 md:pr-12"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Name"
                        type="text"
                        className="h-[70px] bg-white text-lg !ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email Address"
                        type="email"
                        className="h-[70px] bg-white text-lg !ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Subject"
                      type="text"
                      className="h-[70px] bg-white text-lg !ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="min-h-36 resize-none bg-white text-lg !ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="h-[60px] space-x-2 bg-primary-foreground"
          >
            {loading && <Loading className="size-7 fill-white" />}
            <span className="text-lg font-medium text-white">Send Message</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
