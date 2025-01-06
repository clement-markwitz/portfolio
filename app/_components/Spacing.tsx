export type SpacingProps={
    height?: number

}
export const Spacing = ({height}:SpacingProps) => {
  return (
    <div style={{height:height}}></div>
  )
}