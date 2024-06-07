import { useEffect, useState } from "react";


function About(){
    
    const [text,setText]=useState("")



    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/loremipsum?paragraphs=" + 20, {
          headers: { "X-Api-Key": "HBZJ3dHobKXmSb+Xuss3XQ==UDuFDlJ2jtY1cZJP" },
          contentType: "application/json",
        })

        .then((Response)=>Response.json())
        .then((result)=>{
            console.log(result.text)
            setText(result.text)
             }
    )
}
)

    return (
<>
        <h2>About</h2>

<p>
    {
        text.split("\n")
    }
</p>
      
</>
    )

}

export default About;