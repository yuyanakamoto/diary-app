import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← `ngFor` や `ngIf` を使うため
import { FormsModule } from '@angular/forms'; // ← `ngModel` を使うため
import { IonicModule } from '@ionic/angular'; // ← `ion-header` などの Ionic コンポーネントを使うため

@Component({
  selector: 'app-home',
  standalone: true, // Standalone コンポーネントとして定義
  imports: [CommonModule, FormsModule, IonicModule], // 必要なモジュールを追加
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newDiary = { title: '', content: '' }; // 新しい日記データ
  diaries: { title: string; content: string; date: string }[] = []; // 日記リスト
  groupedDiaries: { [monthGroup: string]: any[]} = {}; // グループ分けされた日記の配列を定義

  constructor() {
    this.loadDiaries(); // アプリ起動時に保存された日記を読み込む
  }

  // 日記を追加
  addDiary() {
    if (this.newDiary.title.trim() && this.newDiary.content.trim()) {
      const newEntry = {
        ...this.newDiary,
        date: new Date().toLocaleDateString(), // 自動で日付を追加
      };

      this.diaries.push(newEntry);
      this.saveDiaries(); // 保存
      this.newDiary = { title: '', content: '' }; // 入力フォームをリセット
      this.groupDiariesByMonth(this.diaries); // 追加後に月ごとに分類
    }
  }

  // 日記を削除
  deleteDiary(index: number) {
    this.diaries.splice(index, 1);
    this.saveDiaries();
  }

  // データをローカルストレージに保存
  saveDiaries() {
    localStorage.setItem('diaries', JSON.stringify(this.diaries));
  }

  // ローカルストレージからデータを読み込む
  loadDiaries() {
    const savedDiaries = localStorage.getItem('diaries');
    if (savedDiaries) {
      this.diaries = JSON.parse(savedDiaries);
    }
    this.groupDiariesByMonth(this.diaries);
  }
  // 月ごとに日記をまとめる
  groupDiariesByMonth(diaries: { title: string; content: string; date: string }[]) {
    // 配列をリセット
    this.groupedDiaries = {};
    // diariesの配列分繰り返す
    diaries.forEach((diary) => {
      // YYYY-MM形式で取得
      const month = new Date(diary.date).toISOString().slice(0, 7);
      // 対象のYYYY-MMがすでに存在するか確認
      if (!this.groupedDiaries[month]){
        // 存在しない場合対象のYYYY-MM用の配列を作成
        this.groupedDiaries[month] = [];
      }
      // 対象のYYYY-MMの配列に日記を追加
      this.groupedDiaries[month].push(diary);
    });
  }
  // YYYY-MM形式で返す
  getMonths(): string[] {
    return Object.keys(this.groupedDiaries).sort().reverse();
  }
  
}
