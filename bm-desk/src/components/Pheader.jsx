// "use client";
// import React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { RiArrowDropDownLine } from "react-icons/ri";

// import { cn } from "@/lib/utils";
// import { toast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// const FormSchema = z.object({
//   dob: z.date({
//     required_error: "A date of birth is required.",
//   }),
// });
// function Pheader() {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//   });

//   function onSubmit(data) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }
//   return (
//     <div className="flex justify-between items-centerfont-inter text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
//       <h1 className="text-[#4E5969] flex items-start">My Productivity</h1>
//       <div className="">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="dob"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
              
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={"outline"}
//                           className={cn(
//                             "w-[240px] pl-3 text-left font-normal rounded-[5.196px] bg-[#E8F3FF] border-[#E8F3FF] ",
//                             !field.value && "text-muted-foreground"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "PPP")
//                           ) : (
//                             <span>Pick a date</span>
//                           )}
//                           <RiArrowDropDownLine className="ml-auto h-4 w-4 opacity-50"/>
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent
//                       className="w-auto p-0 bg-white" 
//                       align="start"
//                     >
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date("1900-01-01")
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>

//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Pheader;



import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RiArrowDropDownLine } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

function Pheader({ title }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex justify-between items-center font-inter text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
      <h1 className="text-[#4E5969] flex items-start">{title}</h1>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal rounded-[5.196px] bg-[#E8F3FF] border-[#E8F3FF]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <RiArrowDropDownLine className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Pheader;
