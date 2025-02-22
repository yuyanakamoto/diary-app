import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterOutlet をインポート
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // スタンドアロンコンポーネントとして宣言
  imports: [RouterOutlet], // RouterOutlet と SimpleFormComponent をインポート
})
export class AppComponent {
  title = 'my-app';
}
