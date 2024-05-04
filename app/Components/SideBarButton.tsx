function SideBarButton(props: any) {
  return (
    <button className=" px-2 py-1 hover:bg-[#B0A695] hover:text-[#F3EEEA] ">
      {props.name}
    </button>
  );
}

export default SideBarButton;
