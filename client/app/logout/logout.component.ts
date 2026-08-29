import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class LogoutComponent implements OnInit {
  private auth = inject(AuthService);

  ngOnInit(): void {
    this.auth.logout();
  }
}
