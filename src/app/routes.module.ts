import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/dashboard-module/dashboard.module#DashboardModule'
    },
    { 
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false }),
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
