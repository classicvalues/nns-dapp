import 'dart:async';

import 'package:dfinity_wallet/ui/_components/constrain_width_and_center.dart';
import 'package:dfinity_wallet/ui/_components/overlay_base_widget.dart';
import 'package:dfinity_wallet/dfinity.dart';
import 'package:dfinity_wallet/resource_orchstrator.dart';
import 'package:dfinity_wallet/ui/_components/footer_gradient_button.dart';
import 'package:dfinity_wallet/ui/transaction/select_transaction_type_widget.dart';
import 'package:dfinity_wallet/ui/transaction/wallet/enter_amount_page.dart';
import 'package:dfinity_wallet/ui/transaction/wallet/select_wallet_page.dart';
import 'package:dfinity_wallet/ui/wallet/transaction_row.dart';
import 'package:dfinity_wallet/ui/wallet/transactions_list_widget.dart';
import 'package:uuid/uuid.dart';

import '../../dfinity.dart';
import 'balance_display_widget.dart';
import '../transaction/create_transaction_overlay.dart';

class AccountDetailPage extends StatefulWidget {
  final Account account;

  AccountDetailPage(this.account);

  @override
  _AccountDetailPageState createState() => _AccountDetailPageState();
}

class _AccountDetailPageState extends State<AccountDetailPage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Account"),
        backgroundColor: AppColors.background,
      ),
      body: Container(
          color: AppColors.lightBackground,
          child: StreamBuilder<Object>(
            stream: context.icApi.hiveBoxes.accounts.watch(key: widget.account.identifier),
            builder: (context, snapshot) {
              return FooterGradientButton(
                  body: ConstrainWidthAndCenter(
                    child: ListView(
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.all(24.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      widget.account.name,
                                      style: context.textTheme.headline1,
                                    ),
                                    SizedBox(
                                      height: 10,
                                    ),
                                    SelectableText(
                                      widget.account.accountIdentifier,
                                      style: context.textTheme.bodyText2,
                                    )
                                  ],
                                ),
                              ),
                            ),
                            Padding(
                                padding: EdgeInsets.all(24),
                                child: BalanceDisplayWidget(
                                  amount: widget.account.icpBalance,
                                  amountSize: 40,
                                  icpLabelSize: 25,
                                )),
                          ],
                        ),
                        if (widget.account.transactions.isEmpty)
                          Center(
                            child: Padding(
                              padding: EdgeInsets.symmetric(vertical: 64),
                              child: Text(
                                "No transactions!",
                                style: context.textTheme.bodyText1,
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        TransactionsListWidget(account: widget.account),
                        SizedBox(
                          height: 200,
                        )
                      ],
                    ),
                  ),
                  footer: Center(
                    child: ElevatedButton(
                        child: Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: Text(
                            "New Transaction",
                            style: context.textTheme.button?.copyWith(fontSize: 24),
                          ),
                        ),
                        onPressed: () {
                          if(widget.account.hardwareWallet) {
                            OverlayBaseWidget.show(context, WizardOverlay(
                              rootTitle: "Send ICPT",
                              rootWidget: SelectDestinationAccountPage(source: widget.account),
                            ));
                          }else{
                            OverlayBaseWidget.show(context, WizardOverlay(
                              rootTitle: "Send ICPT",
                              rootWidget: SelectAccountTransactionTypeWidget(
                                source: widget.account,
                              ),
                            ));
                          }
                        }),
                  ));
            }
          )),
    );
  }
}
