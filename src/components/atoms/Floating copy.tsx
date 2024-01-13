import React, { useState, useEffect, ReactChild } from 'react';

/** Floatingのpropsの型 */
export interface FloatingProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  position?: 'abusolute' | 'fixed';
  zIndex?: string;
  children?: ReactChild;
}

/**
 * [atoms] 画面のスクロールに依存しないフローティングなコンポーネント
 * @param props - FloatingProps
 */
export const Floating = ({ children }: FloatingProps) => {
  // 初期値をfalseにする
  const [show, setShow] = useState<boolean>(false);

  // stateを更新するメソッド
  const handleHeightComparison = () => {
    if (window.pageYOffset >= window.innerHeight) {
      // もし現在のY値がページサイズのY以上であれば表示
      setShow(true);
    } else {
      // もし現在のY値がページサイズのY以下であれば非表示
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHeightComparison);
    //初期描画時に一度だけ判定
    handleHeightComparison();
    return () => window.removeEventListener('scroll', handleHeightComparison);
  });

  return (
    <div
      style={{
        // showを直接参照して判定する trueであれば表示・falseならnone（非表示）
        display: show ? '' : 'none',
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        // left: 20,
        position: 'fixed',
        zIndex: '1000',
      }}
    >
      {children}
    </div>
  );
};
