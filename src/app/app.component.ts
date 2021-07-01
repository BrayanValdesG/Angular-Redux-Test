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
    this.serviceHelper.getData('', `${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}`).subscribe((productos: Product[]) => {
      console.log(productos);
    });

    // const product: Product = {
    //   id: 10,
    //   codigo: "Yellow",
    //   "estado": true,
    //   "precio": "146472",
    //   "producto": "YEPA",
    //   "descripcion": "Awesome",
    //   "idCategoria": 1
    // };

    // this.serviceHelper.postData(`http://localhost:3000${this.serviceConfig.settings.ServicesURI["Products"]}`, product).subscribe(res => {
    //   console.log(res);
    // })

    // this.serviceHelper.getData('', `http://localhost:3000${this.serviceConfig.settings.ServicesURI["Products"]}`).subscribe((productos: Product[]) => {
    //   console.log(productos);
    // });
  }
}
