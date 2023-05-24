import { FiCommand } from "react-icons/fi";

export function Spinner (){
    return (
        <div className="Spinner">
          <h1>Uploading...</h1>
          <br />
          
          <FiCommand className="loading-icon" />
          <style jsx>{`
            .Spinner {
                font-family: sans-serif;
                text-align: center;
              }
              
              .loading-icon {
                color: teal;
                font-size: 2rem;
                animation: animate 2s infinite;
              }
              
              @keyframes animate {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(720deg);
                }
              }
            `}
           </style>
        </div>
      );
}