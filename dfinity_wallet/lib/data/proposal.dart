import 'package:dfinity_wallet/data/data.dart';
import 'package:hive/hive.dart';

part 'proposal.g.dart';

@HiveType(typeId: 5)
class Proposal extends DfinityEntity {
  @HiveField(0)
  late String name;
  @HiveField(1)
  late String authorAddress;
  @HiveField(2)
  late DateTime closeDate;
  @HiveField(3)
  late String address;

  Proposal(this.name, this.authorAddress, this.closeDate, this.address);

  @override
  String get identifier => address;
}