import CameraManLogo from "../Components/CameraMan";

export default function About() {
  return (
    <div className="flex relative w-full flex-col items-center justify-center p-3 text-center text-sm sm:text-xl">
      <div className="flex flex-col bottom-3 justify-center items-center">
        <CameraManLogo width="15%" />
        <div className="m-6 flex items-center justify-between gap-2 text-center sm:text-sm text-xs">
          <p>(:</p>
          <p>Proudly created by myself for my family, and friends!</p>
          <p>:)</p>
        </div>
      </div>
    </div>
  );
}
