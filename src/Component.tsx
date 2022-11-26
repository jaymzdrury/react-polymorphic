import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'

type Props<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

const Component = <T extends ElementType>({as, children, ...restProps}:Props<T>) => {
  const C = as || "span"
  return <C {...restProps}>{children}</C>
}

export default Component