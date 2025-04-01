// textというidを持つ要素を定数textElementに代入
const textElement = document.getElementById('text');
// btnというid名を持つ要素を定数btnElementに代入
const btnElement = document.getElementById('btn');
// ボタンがクリックされた時に実行されるイベントリスナーを追加
btnElement.addEventListener('click', () => {
  // 見出しのテキストを変更
  textElement.textContent = 'ボタンをクリックしました';
});