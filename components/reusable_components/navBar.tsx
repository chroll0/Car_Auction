"use client";

import { navLinks } from "@/constants/data";
import { useState } from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <div className="paddingX paddingY flex justify-between">
      <Link href="/">
        <div className="text-[30px] font-extrabold">logo</div>
      </Link>
      <div className="lg:flex hidden justify-around gap-12 items-center ml-10">
        {navLinks.map((link) => (
          <div className="flex items-center" key={link.id}>
            <h3
              className={`${
                active === link.title ? "text-purple-100" : "text-darkBlue-100"
              } font-semibold text-[18px] hover:text-purple-100 tracking-wide
            cursor-pointer capitalize transition duration-200`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </h3>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          link="/auth/login"
          type="button"
          title="Login"
          variant="w-[110px] rounded-[6px] px-4 py-2 bg-darkBlue-200 text-white hover:text-darkBlue-200 font-semibold  hover:bg-slate-300 shadow-4xl"
        />
        <Button
          link="/auth/register"
          type="button"
          title="Sign up"
          variant="w-[110px] px-4 py-2 gap-3 bg-white text-darkBlue-200 rounded-[6px] capitalize font-semibold hover:bg-slate-300 shadow-4xl"
        />
      </div>
    </div>
  );
}

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import { components } from "@/constants/data";
// import Button from "./button";

// export default function Navbar() {
//   return (
//     <NavigationMenu className="paddingX paddingY w-full">
//       <NavigationMenuList className="w-full flex space-between items-center gap-5">
//         <NavigationMenuItem>
//           <a href="/" className="text-[30px] font-extrabold">
//             logo
//           </a>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <Button
//             link="/auth/login"
//             type="button"
//             title="Login"
//             variant="w-[110px] rounded-[6px] px-4 py-2 bg-darkBlue-200 text-white hover:text-darkBlue-200 font-semibold  hover:bg-slate-300 shadow-4xl"
//           />
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <Button
//             link="/auth/register"
//             type="button"
//             title="Sign up"
//             variant="w-[110px] px-4 py-2 gap-3 bg-white text-darkBlue-200 rounded-[6px] capitalize font-semibold hover:bg-slate-300 shadow-4xl"
//           />
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
