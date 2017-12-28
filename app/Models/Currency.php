<?php

namespace App\Models;

use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    //
    public static function updatePrices() {
        $currencies = Currency::all();

        $updatedCurrencies = $currencies->map(function(Currency $item) {
            //Fetch dat price
            $item->fetchPrice();
            return $item;
        });
        $updatedCurrencies->each->save();
    }

    public function fetchPrice() {
        $type = $this->symbol."-USD";
        $client = new Client();
        $res = $client->request('GET', "https://api.gdax.com/products/".$type."/stats");
        $response = (string)$res->getBody();
        $jsonData = \GuzzleHttp\json_decode($response);

        $previous24Hour = floatval($jsonData->open);
        $current = floatval($jsonData->last);

        $this->setAttribute("24_hour_open", $previous24Hour);
        $this->setAttribute("current_price", $current);
        $this->setAttribute("last_price_fetch", Carbon::now()->toDateTimeString());

        $percentageDifferent = round(($previous24Hour - $current) / ($previous24Hour) * 100, 2);

        $percentageDifferent = $previous24Hour > $current ? -$percentageDifferent : $percentageDifferent;

        $this->setAttribute("percentage_difference", $percentageDifferent);
    }
}
