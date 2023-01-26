import React from "react";
import Typography from "@mui/material/Typography";

function Banner() {
  return (
    <div className={"bg-random-img bg-cover bg-no-repeat w-full h-96 p-5"}>
      <Typography sx={{fontSize:50, color:"white"}}>Title of a longer featured blog post</Typography>
    </div>
  );
}

export default Banner;
