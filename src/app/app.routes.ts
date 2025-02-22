import { Routes } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component'; // ✅ インポート

export const routes: Routes = [
  { path: '', component: SimpleFormComponent } // ✅ ルートに `SimpleFormComponent` を設定
];
