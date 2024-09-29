 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { routes } from '../../core.index';
import { SideBar, SideBarData, SideBarMenu, apiResultFormat } from '../../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getEvents() {
    return this.http
      .get<apiResultFormat>('assets/JSON/scheduleevents.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getCustomers() {
    return this.http.get<apiResultFormat>('assets/JSON/customers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getActive() {
    return this.http
      .get<apiResultFormat>('assets/JSON/activecustomer.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDeactive() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deactivecustomer.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getBlogs() {
    return this.http.get<apiResultFormat>('assets/JSON/blogs.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getCategories() {
    return this.http.get<apiResultFormat>('assets/JSON/categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getSalesReport() {
    return this.http.get<apiResultFormat>('assets/JSON/salesReport.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getstockReport() {
    return this.http.get<apiResultFormat>('assets/JSON/stock-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getincomeReport() {
    return this.http
      .get<apiResultFormat>('assets/JSON/income-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTaxReport() {
    return this.http.get<apiResultFormat>('assets/JSON/tax.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getExpensesList() {
    return this.http.get<apiResultFormat>('assets/JSON/expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPaymentList() {
    return this.http.get<apiResultFormat>('assets/JSON/payments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoiceItem() {
    return this.http.get<apiResultFormat>('assets/JSON/itemList.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getEstimatesList() {
    return this.http.get<apiResultFormat>('assets/JSON/estimates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getTicketList() {
    return this.http.get<apiResultFormat>('assets/JSON/ticket.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketopenList() {
    return this.http.get<apiResultFormat>('assets/JSON/ticket.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketPending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsPending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketOpen() {
    return this.http.get<apiResultFormat>('assets/JSON/ticketsopen.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketresolved() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsresolved.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketOverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsOverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketclosed() {
    return this.http.get<apiResultFormat>('assets/JSON/ticketclosed.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketCancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketRecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketrecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCountries() {
    return this.http.get<apiResultFormat>('assets/JSON/countries.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getbankaccount() {
    return this.http.get<apiResultFormat>('assets/JSON/bankaccount.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCities() {
    return this.http.get<apiResultFormat>('assets/JSON/city.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDeliverychallan() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deliverychallens.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMessages() {
    return this.http.get<apiResultFormat>('assets/JSON/message.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFaq() {
    return this.http.get<apiResultFormat>('assets/JSON/faq.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTestimonials() {
    return this.http.get<apiResultFormat>('assets/JSON/testimonials.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getVendors() {
    return this.http.get<apiResultFormat>('assets/JSON/vendors.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLedger() {
    return this.http.get<apiResultFormat>('assets/JSON/ledger.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public recurringinvoice() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringinvoice.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringPending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringpending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringOverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurring() {
    return this.http.get<apiResultFormat>('assets/JSON/recurring.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public recurringCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringcancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringDraft() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringdraft.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUnits() {
    return this.http.get<apiResultFormat>('assets/JSON/units.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCategory() {
    return this.http.get<apiResultFormat>('assets/JSON/category.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProductlist() {
    return this.http.get<apiResultFormat>('assets/JSON/productlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getcreditnotes() {
    return this.http.get<apiResultFormat>('assets/JSON/creditnotes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEditcreditnotes() {
    return this.http
      .get<apiResultFormat>('assets/JSON/editcreditnotes.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotespending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotespending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotesoverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotesdraft() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesdraft.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnoterecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesrecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotecancel() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotescancel.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinvoice() {
    return this.http.get<apiResultFormat>('assets/JSON/invoice.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoicepaid() {
    return this.http.get<apiResultFormat>('assets/JSON/invoicepaid.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoiceoverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoiceoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public quotationReport() {
    return this.http
      .get<apiResultFormat>('assets/JSON/quotation-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public paymentReport() {
    return this.http
      .get<apiResultFormat>('assets/JSON/payment-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinvoicedraft() {
    return this.http.get<apiResultFormat>('assets/JSON/invoicedraft.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoicerecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoicerecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinvoicecancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoicecancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinventory() {
    return this.http.get<apiResultFormat>('assets/JSON/inventory.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpurchase() {
    return this.http.get<apiResultFormat>('assets/JSON/purchase.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpurchaseorder() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchaseorder.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getdebitnotes() {
    return this.http.get<apiResultFormat>('assets/JSON/debitnotes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getquotation() {
    return this.http.get<apiResultFormat>('assets/JSON/quotations.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpaymentsummary() {
    return this.http
      .get<apiResultFormat>('assets/JSON/paymentsummary.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSubscribers() {
    return this.http.get<apiResultFormat>('assets/JSON/subscribers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTransaction() {
    return this.http.get<apiResultFormat>('assets/JSON/transactions.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getrole() {
    return this.http.get<apiResultFormat>('assets/JSON/role.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getdeleteaccount() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deleteaccount.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUsers() {
    return this.http.get<apiResultFormat>('assets/JSON/user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getaddpages() {
    return this.http.get<apiResultFormat>('assets/JSON/addpages.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getstates() {
    return this.http.get<apiResultFormat>('assets/JSON/states.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getblogcomments() {
    return this.http.get<apiResultFormat>('assets/JSON/blogcomments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getsignature() {
    return this.http.get<apiResultFormat>('assets/JSON/signature.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoiceone() {
    return this.http.get<apiResultFormat>('assets/JSON/invoiceone.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCompanies() {
    return this.http.get<apiResultFormat>('assets/JSON/companies.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPurchaseReport() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchase-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPurchaseReturnReport() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchasereturn-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getExpense() {
    return this.http
      .get<apiResultFormat>('assets/JSON/expense-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSubscription() {
    return this.http.get<apiResultFormat>('assets/JSON/subscription.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSalesReports() {
    return this.http.get<apiResultFormat>('assets/JSON/sales-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDomainRequest() {
    return this.http
      .get<apiResultFormat>('assets/JSON/domain-request.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDomain() {
    return this.http.get<apiResultFormat>('assets/JSON/domain.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPurchaseTransaction() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchase-transaction.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTaxPurchase() {
    return this.http.get<apiResultFormat>('assets/JSON/tax-purchase.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTaxPurchase2() {
    return this.http.get<apiResultFormat>('assets/JSON/tax-purchase2.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSalesReturnReports() {
    return this.http
      .get<apiResultFormat>('assets/JSON/salesreturn-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPlanBilling() {
    return this.http
      .get<apiResultFormat>('assets/JSON/plan-billing.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomField() {
    return this.http
      .get<apiResultFormat>('assets/JSON/custom-field.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInventoryHistory() {
    return this.http
      .get<apiResultFormat>('assets/JSON/inventory-history.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDataTables() {
    return this.http
      .get<apiResultFormat>('assets/JSON/data-tables.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPlansList() {
    return this.http
      .get<apiResultFormat>('assets/JSON/plans-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
   
// eslint-disable-next-line @typescript-eslint/no-explicit-any
public sideBar: any[] = [
  {


    tittle: 'الرئيسية',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        
        menuValue: 'لوحة القيادة',
        route: routes.dashboard,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'home',
        base: 'dashboard',
        subMenus: [],
      },
      {
        menuValue: 'Customer',
        route: routes.customer,
        view:false,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'users',
        base: 'customers',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Customers',
            tittle: 'Customers',
            route: routes.customer,
            base: 'customer',
            icon: 'users',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Customer Details',
            tittle: 'Customer Details',
            route: routes.customerdetails,
            base: 'customerdetailspage',
            icon: 'file',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Vendors',
            tittle: 'Vendors',
            route: routes.vendorsList,
            base: 'vendors',
            icon: 'users',
            showAsTab: false,
          },
        ],
      },

    ],
  },
  {
    tittle: 'إدارة العملاء',
    active: false,
    icon: '',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'العملاء',
        route: routes.customer,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'users',
        base: 'customer',
        subMenus: [],
      },
      {
        menuValue: 'Customer Details',
        route: routes.customerdetails,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'file',
        base: 'customerdetailspage',
        subMenus: [],
      },
    ],
  },

  {
    tittle: 'إدارة المخزون',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Products / Services',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'package',
        base: 'product-service',
        subMenus: [
          {
            menuValue: 'Product List',
            route: routes.productslist,
            base: routes.productslist,
          },
          {
            menuValue: 'Category',
            route: routes.category,
            base: routes.category,
          },
          {
            menuValue: 'Units',
            route: routes.units,
            base: routes.units,
          },
        ],
      },
    ],
  },
  {
    tittle: 'إدارة المستخدم',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'المستخدمين',
        route: routes.users,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user',
        base: 'manageusers',
        subMenus: [],
      },
      {
        menuValue: 'الأدوار والإذونات',
        route: routes.rolespermission,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'clipboard',
        base: 'roles-permission',
        subMenus: [],
      },
      {
        menuValue: 'Delete Account Request',
        route: routes.deleteaccountrequest,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'trash-2',
        base: 'delete-account-request',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Content (CMS)',
    active: false,
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Pages',
        route: routes.pages,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'folder',
        base: 'pages',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'إدارة الدعم',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Tickets',
        route: routes.tickets,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'save',
        base: 'tickets',
        subMenus: [
          {
            menuValue: 'Tickets',
            route: routes.ticketslist,
            base: routes.ticketslist,
          },
        ],
      },
    ],
  },
  // {
  //   tittle: 'Pages',
  //   active: false,
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //     {
  //       menuValue: 'Profile',
  //       route: routes.profile,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       icon: 'user-plus',
  //       base: 'profile',
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: 'Authentication',
  //       route: routes.dashboard,
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: 'lock',
  //       base: '',
  //       subMenus: [
  //         { menuValue: 'Login', route: routes.login, base: routes.login },
  //         {
  //           menuValue: 'Register',
  //           route: routes.register,
  //           base: routes.register,
  //         },
  //         {
  //           menuValue: 'Forgot Password',
  //           route: routes.forgot_password,
  //           base: routes.forgot_password,
  //         },
  //         {
  //           menuValue: 'Lock Screen',
  //           route: routes.lock_screen,
  //           base: routes.lock_screen,
  //         },
  //       ],
  //     }
  //   ],
  // },

];

public getSideBarData: BehaviorSubject<Array<SideBarData>> =
  new BehaviorSubject<Array<SideBarData>>(this.sideBar);

public resetData(): void {
  this.sideBar.map((res: SideBar ) => {
    res.showAsTab = false;
    res.menu.map((menus: SideBarMenu) => {
      menus.showSubRoute = false;
    });
  });
}
public planBillingOwl = [
  {
    name: 'Basic',
    remainingDays: '36 days remaining',
    price: '$49.99',
    billingPeriod: 'Monthly',
    text: "Cancel Subscription",
    img: 'assets/img/icons/basic.svg',
    customClass: true
  },
  {
    name: 'ENTERPRISES',
    remainingDays: '365 days remaining',
    price: '$199.99',
    billingPeriod: 'Yearly',
    text: "Upgrade",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
  {
    name: 'Basic',
    remainingDays: '36 days remaining',
    price: '$49.99',
    billingPeriod: 'Monthly',
    text: "Cancel Subscription",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
  {
    name: 'ENTERPRISES',
    remainingDays: '365 days remaining',
    price: '$199.99',
    billingPeriod: 'Yearly',
    text: "Upgrade",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
];
}
