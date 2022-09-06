import React from "react";
import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";

export default function Intro({location}) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Five Days Information", location],
      cursorChar: '🌍',
      loop: false,

    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <h3>
          <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}