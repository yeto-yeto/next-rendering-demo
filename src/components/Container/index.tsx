type ContainerProps = {
  children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full px-16">{props.children}</div>
  )
}
