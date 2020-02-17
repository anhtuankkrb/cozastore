import ScrollUpButton from "react-scroll-up-button";
export default function BackTop() {
  return (
    <ScrollUpButton
      ShowAtPosition={150}
      ContainerClassName=" AnyClassForContainer "
      TransitionClassName=" AnyClassForTransition "
    >
      <div>
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
    </ScrollUpButton>
  );
}
