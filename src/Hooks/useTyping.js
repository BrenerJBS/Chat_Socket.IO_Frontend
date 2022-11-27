import React from 'react';

const useTyping = () => {
  const [isTyping, setIsTyping] = React.useState(false);
  const [isKeyPressed, setIsKeyPressed] = React.useState(false);
  const [countdown, setCountdown] = React.useState(5);

  const startTyping = () => {
    setIsKeyPressed(true);
    setCountdown(5);
    setIsTyping(true);
  };

  const stopTyping = () => {
    setIsKeyPressed(false);
  };

  const cancelTyping = () => {
    setCountdown(0);
  };

  React.useEffect(() => {
    let interval;
    if (!isKeyPressed) {
      interval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (isKeyPressed || countdown === 0) {
      clearInterval(interval);
    }
    if (countdown === 0) {
      setIsTyping(false);
    }
    return () => clearInterval(interval);
  }, [isKeyPressed, countdown]);
  return { isTyping, startTyping, stopTyping, cancelTyping, setIsTyping };
};
export default useTyping;