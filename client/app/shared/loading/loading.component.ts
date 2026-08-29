import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  condition = input<boolean>(false);
  displayedCondition = computed(() => this.condition());
}
