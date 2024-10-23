'use client'
import Image from "next/image";
import Link from "next/link";
import menu_icon from "../../../public/menu_icon.svg";
import linkedIn_icon from "../../../public/linkedin_icon.svg";
import github_icon from "../../../public/github_logo.svg";
// let PDF_FILE_URL = 'http://localhost:7000/file_pdf.pdf'
import { GoDownload } from "react-icons/go";
// 

const Header = () => {
  const downloadFileAtUrl = (url:any)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url;
    aTag.setAttribute('download', fileName) 
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <></>
  );
};

export default Header;
