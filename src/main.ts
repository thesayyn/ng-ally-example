import { enableProdMode } from '@angular/core'
import { platformServer } from '@ng-ally/platform-server'
import { environment } from './environments/environment'
import { AppModule } from './app/app.module';

if(environment.production) enableProdMode();


platformServer().bootstrapModule(AppModule)
.catch( err => console.log(err) )
