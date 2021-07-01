import { Component } from '@angular/core';
import { Product } from '@shared/models';
import { ConfigurationServiceService, ServiceHelperService } from '@shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Onnovacion';

  constructor(private serviceHelper: ServiceHelperService<Product[], any>, private serviceConfig: ConfigurationServiceService) {
    this.serviceHelper.getData('', `http://localhost:3000${this.serviceConfig.settings.ServicesURI["Products"]}`).subscribe((res) => {
      console.log(res);
    });
  }
}
