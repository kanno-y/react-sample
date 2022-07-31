import React, { useRef, useState } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;
export const ImageUploader = () => {
  // 隠されたinput要素にアクセスするためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // 選択されたファイルデータを保持するref
  const filerRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>('');

  // 「画像をアップロード」というテキストがクリックされた時のコールバック
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // inputの DOMにアクセスして、クリックイベントを発火する
      inputImageRef.current.click();
    }
  };

  // ファイルが選択された後に呼ばれるコールバック
  const onChnageImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      // fileRef.currentに値を保存する
      // fileRef.currentが変化しても再描画しない
      filerRef.current = files[0];
    }
  };

  // アップロードボタンがクリックされた時に呼ばれるコールバック
  const onClickUpload = async () => {
    console.log(filerRef);
    if (filerRef.current !== null) {
      // 通常はここでAPIを読んで、ファイルサーバーにアップロードする
      // ここでは疑似的に一定時間待つ
      await sleep(UPLOAD_DELAY);
      // アップロードが成功した旨を表示するために、メッセージを書き換える
      setMessage(`${filerRef.current.name} has been successfully uploaded`);
    }
  };
  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        type='file'
        ref={inputImageRef}
        accept='image/*'
        style={{ visibility: 'hidden' }}
        onChange={onChnageImage}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};
