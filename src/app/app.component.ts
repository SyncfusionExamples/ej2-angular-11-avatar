import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id='element'>
          <span class="e-avatar e-avatar-xlarge"></span>
          <span class="e-avatar e-avatar-large"></span>
          <span class="e-avatar"></span>
          <span class="e-avatar e-avatar-small"></span>
          <span class="e-avatar e-avatar-xsmall"></span>
  </div>
  `
})
export class AppComponent {
  title = 'angular11Avatar-app';
}
