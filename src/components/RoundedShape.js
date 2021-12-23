
const RoundedShape = (props) => {
  return (
    <div
      className="hidden md:block overflow-hidden bg-bookmark-primary rounded-l-full absolute h-80 w-2/4
          top-32 right-0
          lg:-bottom-28
          lg:-right-35 "
    ></div>
  );
}

export const RoundedShapeLeft = () => {
  return (
    <div
      className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-primary
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-32
          "
    ></div>
  );
}

export const RoundedShapeRight = () => {
  return (
    <div
      className="overflow-hidden hidden lg:block bg-bookmark-primary rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-12
            -right-36
          "
    ></div>
  );
}

export default RoundedShape;