<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('secondary_categories', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->foreignId('primary_category_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->integer("sort_order");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('secondary_categories');
    }
};
