<?php

use App\Models\Currency;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $btc = new Currency();
        $btc->display_name = "Bitcoin";
        $btc->symbol = "BTC";
        $btc->created_at = new DateTime();
        $btc->save();

        $bch = new Currency();
        $bch->display_name = "Bitcoin Cash";
        $bch->symbol = "BCH";
        $bch->created_at = new DateTime();
        $bch->save();

        $eth = new Currency();
        $eth->display_name = "Ethereum";
        $eth->symbol = "ETH";
        $eth->created_at = new DateTime();
        $eth->save();

        $ltc = new Currency();
        $ltc->display_name = "Litecoin";
        $ltc->symbol = "LTC";
        $ltc->created_at = new DateTime();
        $ltc->save();

    }
}
