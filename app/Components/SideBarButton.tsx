function SideBarButton(props: any) {
  return (
    <button className="py-2 hover:bg-[#B0A695] hover:text-[#F3EEEA] ">
      {props.name}
    </button>
  );
}

export default SideBarButton;
