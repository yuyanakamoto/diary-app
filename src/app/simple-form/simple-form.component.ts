import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ FormsModule をインポート
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-form-fixed',
  standalone: true, // ✅ スタンドアロンコンポーネントとして定義
  imports: [FormsModule, CommonModule], // ✅ FormsModule を追加
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'] // ✅ `styleUrl` → `styleUrls` に修正
})
export class SimpleFormComponent {
  result: string = "足し算しよ";
  text1: string="0";
  text2: string="0";

  updateText1(value: string): void {
    this.text1 = value;
    console.log("text1 updated:", this.text1); // デバッグ用
  }

  updateText2(value: string): void {
    this.text2 = value;
    console.log("text2 updated:", this.text2); // デバッグ用
  }

  addAndShow(): void {
    console.log("ボタンがクリックされました！");
    console.log("text1:", this.text1, "text2:", this.text2); // デバッグ用
    let int1 = Number(this.text1);
    let int2 = Number(this.text2);

    if (!isNaN(int1) && !isNaN(int2)) {
      this.result = `結果: ${int1 + int2}`;
    } else {
      this.result = "正しい数値を入力してください";
    }
  }
}
