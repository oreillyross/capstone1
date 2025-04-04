import React from "react";


interface FormContainerProps {
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    
    <div className="flex"> 
     <div className="relative hidden md:flex">
      <img className="h-screen object-cover" src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"/>
       <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
     </div>
     
      <div className="h-screen flex flex-col flex-1 items-center justify-center bg-green-50">
    <div className="flex flex-col items-center mx-2 my-8">
        <img className="w-24" src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"/>
    <div className="font-playfair text-3xl text-emerald-700">
    Riley's Plants
    </div>
    </div>
    {children}</div>
      </div>);
};
