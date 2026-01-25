import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span className="gradient-text">{displayText}</span>
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
};

export default TypewriterText;
