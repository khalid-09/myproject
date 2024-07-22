'use client';

import { contactSchema, ContactSchema } from '@/validation/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import indiaFlagIcon from '../../public/indiaIcon.png';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  location: string;
}

const ContactForm = ({ location }: ContactFormProps) => {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: 'My Name',
      phoneNumber: '0000000000',
      businessName: 'ABC Technologies PVT LTD',
      businessEmail: 'demoaccount@gmail.com',
    },
  });

  const { control, reset, handleSubmit } = form;

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
    reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'flex gap-6  items-end text-[#101828]',
          location === 'discuss' ? 'flex-col' : 'flex-row'
        )}
      >
        <div className="space-y-6">
          <div className="flex items-center md:flex-row flex-col gap-6">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#667085] text-sm">
                    Full name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="pl-0 text-[#101828]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:translate-x-6">
              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#667085] text-sm">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input {...field} className="px-0 pl-[3.8rem]" />
                        <div className="absolute top-[6px] left-0 flex gap-2">
                          <div className="relative h-[22px] w-[18px]">
                            <Image
                              src={indiaFlagIcon}
                              alt="India Flag"
                              fill
                              className="object-cover absolute"
                            />
                          </div>
                          <span className="text-base">+91</span>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-6">
            <FormField
              control={control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#667085] text-sm">
                    Business name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="pl-0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="businessEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#667085] text-sm">
                    Business mail
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="pl-0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {location === 'home' ? (
          <Button
            type="submit"
            className="px-6 py-3 w-[8.25rem] h-[3.625rem] bg-[#80A948]"
          >
            Get <br /> Consultation
          </Button>
        ) : (
          <Button className="px-6 py-3 bg-[#FFB900] rounded-[8px]">
            Discuss the project
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
