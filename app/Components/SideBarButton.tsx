function SideBarButton(props:any) {
    
    return(
        <button className="hover:bg-[#B0A695] hover:text-[#F3EEEA] py-2 ">
            {props.name}
        </button>

    )
  }
  
  export default SideBarButton;