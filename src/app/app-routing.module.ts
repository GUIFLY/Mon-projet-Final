import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aakeycloak',
    loadChildren: () => import('./aakeycloak/aakeycloak.module').then( m => m.AakeycloakPageModule)
  },
  {
    path: 'abonnement',
    loadChildren: () => import('./abonnement/abonnement.module').then( m => m.AbonnementPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'admin-rendez-vous',
    loadChildren: () => import('./admin-rendez-vous/admin-rendez-vous.module').then( m => m.AdminRendezVousPageModule)
  },
  {
    path: 'atestbluetooth',
    loadChildren: () => import('./atestbluetooth/atestbluetooth.module').then( m => m.AtestbluetoothPageModule)
  },
  {
    path: 'auth-key',
    loadChildren: () => import('./auth-key/auth-key.module').then( m => m.AuthKeyPageModule)
  },
  {
    path: 'bloc-post-detail',
    loadChildren: () => import('./bloc-post-detail/bloc-post-detail.module').then( m => m.BlocPostDetailPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('./book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'book-appointment-confirmation',
    loadChildren: () => import('./book-appointment-confirmation/book-appointment-confirmation.module').then( m => m.BookAppointmentConfirmationPageModule)
  },
  {
    path: 'carnetelectronique',
    loadChildren: () => import('./carnetelectronique/carnetelectronique.module').then( m => m.CarnetelectroniquePageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'conseil',
    loadChildren: () => import('./conseil/conseil.module').then( m => m.ConseilPageModule)
  },
  {
    path: 'const',
    loadChildren: () => import('./const/const.module').then( m => m.ConstPageModule)
  },
  {
    path: 'creercompte',
    loadChildren: () => import('./creercompte/creercompte.module').then( m => m.CreercomptePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./examen/examen.module').then( m => m.ExamenPageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('./facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'forfait',
    loadChildren: () => import('./forfait/forfait.module').then( m => m.ForfaitPageModule)
  },
  {
    path: 'forfait-create',
    loadChildren: () => import('./forfait-create/forfait-create.module').then( m => m.ForfaitCreatePageModule)
  },
  {
    path: 'forfait-edit',
    loadChildren: () => import('./forfait-edit/forfait-edit.module').then( m => m.ForfaitEditPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'maladie',
    loadChildren: () => import('./maladie/maladie.module').then( m => m.MaladiePageModule)
  },
  {
    path: 'm-constantes',
    loadChildren: () => import('./m-constantes/m-constantes.module').then( m => m.MConstantesPageModule)
  },
  {
    path: 'med-conseil',
    loadChildren: () => import('./med-conseil/med-conseil.module').then( m => m.MedConseilPageModule)
  },
  {
    path: 'med-examen',
    loadChildren: () => import('./med-examen/med-examen.module').then( m => m.MedExamenPageModule)
  },
  {
    path: 'medicaments',
    loadChildren: () => import('./medicaments/medicaments.module').then( m => m.MedicamentsPageModule)
  },
  {
    path: 'medicaments-post',
    loadChildren: () => import('./medicaments-post/medicaments-post.module').then( m => m.MedicamentsPostPageModule)
  },
  {
    path: 'med-medicaments',
    loadChildren: () => import('./med-medicaments/med-medicaments.module').then( m => m.MedMedicamentsPageModule)
  },
  {
    path: 'med-rendez-vous',
    loadChildren: () => import('./med-rendez-vous/med-rendez-vous.module').then( m => m.MedRendezVousPageModule)
  },
  {
    path: 'mes-constantes',
    loadChildren: () => import('./mes-constantes/mes-constantes.module').then( m => m.MesConstantesPageModule)
  },
  {
    path: 'mes-constantes2',
    loadChildren: () => import('./mes-constantes2/mes-constantes2.module').then( m => m.MesConstantes2PageModule)
  },
  {
    path: 'page-chat',
    loadChildren: () => import('./page-chat/page-chat.module').then( m => m.PageChatPageModule)
  },
  {
    path: 'page-lab-test',
    loadChildren: () => import('./page-lab-test/page-lab-test.module').then( m => m.PageLabTestPageModule)
  },
  {
    path: 'page-treatment-category',
    loadChildren: () => import('./page-treatment-category/page-treatment-category.module').then( m => m.PageTreatmentCategoryPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'patients-details',
    loadChildren: () => import('./patients-details/patients-details.module').then( m => m.PatientsDetailsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'rendez-vous',
    loadChildren: () => import('./rendez-vous/rendez-vous.module').then( m => m.RendezVousPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'teleconsultation',
    loadChildren: () => import('./teleconsultation/teleconsultation.module').then( m => m.TeleconsultationPageModule)
  },
  {
    path: 'testget',
    loadChildren: () => import('./testget/testget.module').then( m => m.TestgetPageModule)
  },
  {
    path: 'text-consultation',
    loadChildren: () => import('./text-consultation/text-consultation.module').then( m => m.TextConsultationPageModule)
  },
  {
    path: 'text-consultation-booking',
    loadChildren: () => import('./text-consultation-booking/text-consultation-booking.module').then( m => m.TextConsultationBookingPageModule)
  },
  {
    path: 'userconnecte',
    loadChildren: () => import('./userconnecte/userconnecte.module').then( m => m.UserconnectePageModule)
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'video-consultation',
    loadChildren: () => import('./video-consultation/video-consultation.module').then( m => m.VideoConsultationPageModule)
  },
  {
    path: 'video-consultation-result',
    loadChildren: () => import('./video-consultation-result/video-consultation-result.module').then( m => m.VideoConsultationResultPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'video-call',
    loadChildren: () => import('./video-call/video-call.module').then( m => m.VideoCallPageModule)
  },
  {
    path: 'iconst1',
    loadChildren: () => import('./iconst1/iconst1.module').then( m => m.Iconst1PageModule)
  },
  {
    path: 'iconst2',
    loadChildren: () => import('./iconst2/iconst2.module').then( m => m.Iconst2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
