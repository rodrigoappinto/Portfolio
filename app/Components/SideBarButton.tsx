function SideBarButton({ name }: { name: string }) {
  return (
    <button className="px-2 py-1 hover:bg-[#B0A695] hover:text-[#F3EEEA]">
      {name}
    </button>
  );
}

export default SideBarButton;
