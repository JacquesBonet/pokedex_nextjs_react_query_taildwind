import React, { FC } from "react";
import { ICardProps, IPage } from "@/types";

interface IVirtualListProps {
  Element: FC<ICardProps>,
  pages: IPage[],
  observe: (props: HTMLElement) => void
}

export const VirtualList = ({Element, pages, observe}: IVirtualListProps) => (
  <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {pages?.map((page: any, idx: number) =>
      page.results?.map((data: any, jdx: number) => {
        const isLast = pages.length * page.results.length - (idx + 1) * (jdx + 1) === 0 ? true : false
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
