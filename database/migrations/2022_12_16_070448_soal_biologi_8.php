<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('soal_biologi_8', function (Blueprint $table) {
            $table->id();
            $table->string('soal');
            $table->string('jawaban');
        });
    }

    public function down()
    {
        Schema::dropIfExists('soal_biologi_8');
    }
};
