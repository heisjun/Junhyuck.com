import { useRef, useEffect } from "react";

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!pRef.current) return;

    const element = pRef.current;

    const array = text.split("");
    const special = ["~", "@", "!", "#", "$", "%", "^", "&", "*"];
    const exception = [" ", "\n", ".", ","];
    const random = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const numArray: number[] = [];
    array.forEach((char) => {
      const num = random(5, 40);
      numArray.push(num);
    });

    let completeCount: number;
    let newText: string;
    const timer = setInterval(() => {
      completeCount = 0;
      newText = "";
      numArray.forEach((num, i) => {
        if (exception.includes(array[i]) || numArray[i] === 0) {
          newText += array[i];
          completeCount += 1;
        } else {
          newText += special[numArray[i] % special.length];
          numArray[i] = --num;
        }
      });

      element.innerText = newText;
      if (completeCount === numArray.length) clearInterval(timer);
    }, 100);
  }, [text]);

  return <span ref={pRef}>{text}</span>;
};

export default GlitchText;
