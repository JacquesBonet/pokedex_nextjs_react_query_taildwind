import React, { FC } from "react";
import { ICardProps, IVirtualElement } from "@/types";

type Props = {
  Element: FC<ICardProps>,
  pages: IVirtualElement[],
  observe: (props: HTMLElement) => void
}

export const VirtualList = ({Element, pages, observe}: Props) => (
  <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {pages?.map((page: any) =>
      page.results?.map((data: any) => {
        const isLast = !data.next
        const { url } = data

        return (
          <li
            key={url}
            ref={isLast ? observe : null}
            className="h-80 w-full"
          >
            <Element url={url} index={url} />
          </li>
        )
      })
    )}
  </ul>
)
