import { useEffect, useState } from 'react';

export default function Presentation() {
  const [isTyping, setIsTyping] = useState(true);
  const textToType: string[] = [
    "Bonjour !\nJe m'appelle",
    'Hassan Cheikh Hussein',
    'Je suis',
    'Web Developpeur',
    "(ça veut dire que je construis des trucs sur internet)"
  ];
  const typingDelay: number = 50; // Délai en millisecondes entre chaque caractère

  useEffect(() => {
    const typeNextCharacter = (elementIndex: number, charIndex: number) => {
      if (elementIndex >= textToType.length) {
        setIsTyping(false);
        return;
      }

      const currentElement: HTMLElement | null = document.getElementById(`element-${elementIndex}`);
      if (!currentElement) return;

      const currentText: string = textToType[elementIndex];
      const newText: string = currentText.slice(0, charIndex + 1);

      currentElement.innerHTML = newText;

      if (newText === currentText) {
        setTimeout(() => typeNextCharacter(elementIndex + 1, 0), typingDelay * 10);
      } else {
        setTimeout(() => typeNextCharacter(elementIndex, charIndex + 1), typingDelay);
      }
    };

    typeNextCharacter(0, 0);
  }, []);

  return (
    <>
      <span id="element-0"></span>
      <h1 className="h1" id="element-1"></h1>
      <span id="element-2"></span>
      <h2 className="h2" id="element-3"></h2>
      <span id="element-4"></span>
    </>
  );
}