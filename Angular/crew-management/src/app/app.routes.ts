import { Routes } from '@angular/router';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { signal } from '@angular/core';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
    {
        path:"admin",
        loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:"add-user",
        // loadChildren:()=>import('./admin/add-user/add-user.component').then(c=>c.AddUserComponent),
        component:AddUserComponent // if in this way is written then the component is not lay loaded it directly gets loaded .
        //but if want to load the component using lazy loading then use loadChildren
    },
    {
        path:"two-way",
        component:TwoWayComponent
    },
    {
        path:"signal",
        component:SignalComponent
    }
];
