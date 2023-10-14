// import Config from "@/Config";
// import useHasAuth from "@/hooks/useHasAuth";
// import useGlobalStore from "@/store/globalStore";
// import { useRouter } from "next/router";
// import {
//   Component,
//   FunctionComponent,
//   ComponentProps,
//   ReactComponentElement,
// } from "react";

// export default function WithAuth(Component: FunctionComponent) {
//   return function (props: ComponentProps<typeof Component>) {
//     const router = useRouter();
//     const isAuthed = useHasAuth();

//     if (!isAuthed) {
//       router.replace(Config.pages.login);
//     }

//     return <Component {...props} />;
//   };
// }
